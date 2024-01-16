![KMH-Task2-Conceptual](/KMH-Task2-Conceptual.png)

* LoadBalancer, same for both paths
* CheckAuth, same for both paths
  * we are in a public cloud, we don't want anybody to have access to it other than our customers
  * could also be checked before load balancer if something like an API gateway is used

* 2 separate endpoints for cleaner solution
  * this also enables the possibility to return 200 after receiving the file and before validating the contents
  * this could be useful if the files are to big and take a long time to process

* file store for safekeeping and possible support with invalid entries / debugging later
  * can be cleaned up in cronjob if needed
* parse and validate, we want to be able to send valid orders forward and report on the invalid ones

* DataStore / Queue
  * due to the limited opening time of OEA, we need some way to que the orders for later processing
  * can be solved with either a database or a queue

* Cron Job
  * easy way to limit running to opening hours, alternative we could check OEA if its open and then start processing
  * get all open orders from database and send them to OEA
  * if we don't get an OrderId back then OEA didn't receive the order
  * or OEA doesn't respond
    * increase try counter
    * we do this to be able to limit the amount of retries and prevent it being stuck in front of other orders
    * this needs to be reported or monitored so that it can be fixed eventually
  * else 
    * add orderId to database entry which marks it completed
    * send out order confirmation to customer

* OrderEntryAPI
  * I assume that the api returns me an orderId in order to mark queued orders as completed and send out and confirmation to the customer