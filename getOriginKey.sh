curl https://checkout-test.adyen.com/v1/originKeys \
-H "X-Api-key: <Your Key Here>" \
-H "Content-Type: application/json" \
-d '{
   "originDomains":[
      "http://localhost:3000"
   ]
}'