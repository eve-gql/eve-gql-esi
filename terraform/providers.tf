provider "aws" {
  default_tags {
    tags = {
      Terraform  = "true"
      Service    = local.service
      Repository = local.repository
    }
  }
}
