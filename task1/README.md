* isBusinessCustomer seems to be irrelevant for the api
* one of the products does not have a prices array, which I would consider a bug in the products service
* price availability files don't match customerId, so I will assume that the file does not belong to the user
  * 00000055 !== 000000055
  * 000010453 !== 0000104530
* **missing test**, I'm  not familiar enough with JS testing to implement it in the time, need to learn this then asap