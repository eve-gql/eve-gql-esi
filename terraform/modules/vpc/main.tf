resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr
  enable_dns_support = true
  enable_dns_hostnames = true
  tags = {
    Name = "${var.name_prefix}-vpc"
  }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id
  tags = {
    Name = "${var.name_prefix}-igw"
  }
}

resource "aws_subnet" "public" {
  count = length(var.azs)
  vpc_id = aws_vpc.main.id
  cidr_block = var.public_subnet_cidrs[count.index]
  availability_zone = var.azs[count.index]
  map_public_ip_on_launch = true
  tags = {
    Name = "${var.name_prefix}-public-${count.index + 1}"
  }
}

resource "aws_subnet" "private" {
  count = length(var.azs)
  vpc_id = aws_vpc.main.id
  cidr_block = var.private_subnet_cidrs[count.index]
  availability_zone = var.azs[count.index]

  tags = {
    Name = "${var.name_prefix}-private-${count.index + 1}"
  }
}

resource "aws_eip" "nat" {
  count = length(var.azs)
  domain = "vpc"
  depends_on = [ aws_internet_gateway.igw ]

  tags = {
    Name = "${var.name_prefix}-nat-eip-${count.index + 1}"
  }
}

resource "aws_nat_gateway" "nat" {
  count = length(var.azs)
  allocation_id = aws_eip.nat[count.index].id
  subnet_id = aws_subnet.public[count.index].id

  tags = {
    Name = "${var.name_prefix}-nat-${count.index + 1}"
  }

  depends_on = [ aws_internet_gateway.igw ]
}

resource "aws_route_table" "public" {
  count = length(var.azs)
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "${var.name_prefix}-public-rt-${count.index + 1}"
  }
}

resource "aws_route_table_association" "public" {
  count = length(var.azs)
  subnet_id = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public[count.index].id 
}

resource "aws_route_table" "private" {
  count = length(var.azs)
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0" 
    nat_gateway_id = aws_nat_gateway.nat[count.index].id         
  }

  tags = {
    Name = "${var.name_prefix}-private-rt-${count.index + 1}"
  }
}

resource "aws_route_table_association" "private" {
  count = length(var.azs)
  subnet_id = aws_subnet.private[count.index].id
  route_table_id = aws_route_table.private[count.index].id 
}
