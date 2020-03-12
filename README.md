## Introduction

Hello dear Candidate,

Thank you for considering us as a future employer and the effort for taking this trial task in order to show us how you solve problems.

## The task
Please provide the solution of your trial task in a seperate, publically available git repository.

The task has 2 parts:

#### 1. Programming

Your task is to develop a little REST API, which returns products, prices and user information for a certian or unknown user.

  - The Service MUST be written in JavaScript with NodeJS you CAN use expressJS or other frameworks for that.
  - The API MUST to be able to handle requests like the ones given in `./programming/example-request-bodies.json`
  - It MUST return data as described in the flow diagram `./programming/product-service.png`
  - You DO NOT need to implement a data store or anything. Just use the jsons as provided and mock the parts you would access from other sources
  - You DO NOT need to implement authentication
  - You DO NOT need to use Docker

You can find the known customers, products from "Service A" and product availabilites in the `./programming` directory, too.

![flow diagram of product service](/programming/product-service.png)

#### 2. Conceptual

Your task is to create a little diagram (nothing fancy) and a little description that shows the architecture you'd choose for the a part of the application that is described as followed:
After returning the products from your REST API to an processing application, the application will return a JSON with a list of products the customer wants to order. The system your working in has all informations about an order entry API from a big warehouse where you should forward the order to.
There are some limitations and contraints:

  - The order entry API (OEA) is only available between in business hours
  - The OEA sometimes doesn't respond and don't seem to receive the order
  - You also have to send batches of orders from another system, which you receive as an .csv file
  - Your application is hosted in a public cloud environment

Please also note the following:

  - Don't write about details about the actual code or implementation of the service
  - Use only generic terms like Database/Datastore, Load Balancer, File Storage etc. -> Don't refer to a specific cloud provider oder service
  - We don't need a complex UML diagram
  - Describe your architecture decisions in key points (no long text)
