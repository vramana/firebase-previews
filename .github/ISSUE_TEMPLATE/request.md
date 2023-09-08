name: Issue Report
description: Report an issue with the app
body:
- id: domains
  type: array
  required: true
  attributes:
    label: Domains
    placeholder: Enter the affected domains
- id: app_name
  type: string
  required: true
  attributes:
    label: App Name
    placeholder: Enter the name of the app