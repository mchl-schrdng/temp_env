# Streamlit App Deployment via GitHub Actions    

This repository demonstrates the automatic deployment of a Streamlit application via GitHub Actions to Google Cloud Run.

## Deployment

The deployment process of the application is automated with GitHub Actions workflows, interacting with Google Cloud Run to handle the hosting of the application. Two separate environments are created for different stages of the development process:

1. **Preview Environment**: For each pull request, a separate preview environment is automatically created. This allows reviewers and developers to view and interact with the application with the proposed changes before they are merged into the main codebase. The URL for this environment is posted in the comments of the pull request. Once the pull request is closed, the environment is automatically destroyed.

2. **Production Environment**: When changes are pushed or merged into the main branch, the application is automatically deployed to the production environment. This version of the application reflects the latest stable release.

Each of these environments is completely isolated, ensuring changes in one do not affect the other.
