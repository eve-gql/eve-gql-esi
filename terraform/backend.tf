terraform {
  backend "s3" {
    bucket       = "tfstate-384843744163"
    key          = "terraform.tfstate"
    region       = "us-east-2" # Or your desired region
    use_lockfile = true
    encrypt      = true
  }
}