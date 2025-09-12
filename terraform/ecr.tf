resource "aws_ecr_repository" "ElasticContainerRegistry" {
  name                 = "eve-gql-esi"
  image_tag_mutability = "MUTABLE" # if the same tag is pushed again, it will be overwritten

  image_scanning_configuration {
    scan_on_push = true
  }
}
