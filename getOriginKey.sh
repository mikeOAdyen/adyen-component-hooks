curl https://checkout-test.adyen.com/v1/originKeys \
-H "X-API-key: AQEyhmfxK4zJbBZDw0m/n3Q5qf3VaY9UCJ1+XWZe9W27jmlZiniYHPZ+YtXG9dYfNdwN0H8QwV1bDb7kfNy1WIxIIkxgBw==-uA2G0DS73SlmB4EHi/YNndhli7KlCMjXHbMmm8stboc=-djvcdM2gNHq9dSvC" \
-H "Content-Type: application/json" \
-d '{
   "originDomains":[
      "http://localhost:3000"
   ]
}'