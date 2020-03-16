## Introduction

Hello dear Candidate,

Thank you for considering us as your future employer and the effort for taking this trial task in order to show us your problem-solving skills.

## The task
Please provide the solution of your trial task in a separate, publicly available git repository and send me the link. (For my email see `Contact` at the bottom of this README)

The task has 2 parts:

#### 1. Programming

Your task is to develop a little REST API, which returns products, prices and user information for a certain or unknown user.

  - The Service MUST be written in JavaScript with NodeJS you CAN use expressJS or other frameworks for that.
  - The API MUST be able to handle requests like the ones given in `./programming/example-request-bodies.json`
  - It MUST return data as described in the flow diagram `./programming/product-service.png`
  - You DO NOT need to implement a data store or anything. Just use the jsons as provided and mock the parts you would access from other sources
  - You DO NOT need to implement authentication
  - You DO NOT need to use Docker

You can find the known customers, products from "Service A" and product availabilities in the `./programming` directory, too.

![flow diagram of product service](/programming/product-service.png)

#### 2. Conceptual

Your task is to create a little diagram (nothing fancy) and a little description that shows the architecture you'd choose for a part of the application that is described as followed:

After returning the products from your REST API to a processing application, the application will return a JSON with a list of products the customer wants to order. The system you are working on has all information about an order entry API from a big warehouse where you should forward the order to.
There are some limitations and constraints:

  - The order entry API (OEA) is only available between in business hours
  - The OEA sometimes doesn't respond and don't seem to receive the order
  - You also must send batches of orders from another system, which you receive as an .csv file
  - Your application is hosted in a public cloud environment

Please also note the following:

  - Don't write about details about the actual code or implementation of the service
  - Use only generic terms like Database/Datastore, Load Balancer, File Storage etc. -> Don't refer to a specific cloud provider or service
  - We don't need a complex UML diagram
  - Describe your architecture decisions in key points (no long text)

## Contact

  If you have trouble understanding the tasks or general questions, don't hesitate to contact me on the below mail:

  Mark Labenski <mark.labenski@kmh-gmbh.com>

glhf
