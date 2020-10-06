curl https://checkout-test.adyen.com/v1/originKeys \
-H "X-Api-key: AQEyhmfxKo/IbxdCw0m/n3Q5qf3VaY9UCJ1+XWZe9W27jmlZit3gl+Rw4h7qBvwKdZaPPa8QwV1bDb7kfNy1WIxIIkxgBw==-uKWp2NFSMlSg7o1J/Dhq/GnycXhUS4YDdz1LS4TqaWk=-MmAP6X{=wt]\$S5gW" \
-H "Content-Type: application/json" \
-d '{
   "originDomains":[
      "http://localhost:8080/"
   ]
}'