variable "container_name" {
  description = "Name of the container"
  type        = string
  default     = "eve-gql-esi"
}

variable "container_image" {
  description = "Docker image to deploy"
  type        = string
  default     = "384843744163.dkr.ecr.us-east-2.amazonaws.com/eve-gql-esi:latest"
}

variable "container_port" {
  description = "Port the container listens on"
  type        = number
  default     = 3000
}

variable "desired_count" {
  description = "Number of ECS tasks to run"
  type        = number
  default     = 2
}

variable "cpu" {
  description = "CPU units for the ECS task"
  type        = number
  default     = 256
}

variable "memory" {
  description = "Memory (in MiB) for the ECS task"
  type        = number
  default     = 512
}

variable "region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-2"
}
