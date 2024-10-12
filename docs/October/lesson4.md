# Lesson 4: Building a currency converter

> In this self study guide we will be building a currency converter using apilayer and Python

## Day 6

### Create an APILayer Account

Go on API Layers official [site](https://apilayer.com/)

Search Exchange Rates Data API

Click Free Plan and click subscribe

Sign-up for an account and copy the API Key Given.

** PLEASE SAVE THIS API KEY **

### Connect To the API

Write these initial lines of code

```python
import requests

url = "https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}"

payload = {}
headers= {
  "apikey": YOUR_API_KEY_HERE
}
```

The first line imports the request function which is where you can send API calls to remote servers.

### What is an API

Now you might be wondering, what is this API nonsense?

An API (Short for Application Processing Interface) allows multiple programs to talk to each other. An example of this in Youtube is the server (where all videos are hosted) and the client (Where you watch the video) The API make sure the client can fetch the correct videos from the server and play it

In this example our application (Client) will be talking to the APILayer API to fetch currency data from the server

<details>
<summary>Does HB CodeLink use an API on its site</summary>
Shameless plug, but check out our website. We use an API to connect the backend (stores login and forum posts) to the frontend which displays it
</details>

### Back to Code Lol

The uri tells Python what url to connect to receive the API Data. In this case it's API Layers official server

We can ignore payload for now

Then we create a headers dictionary with the API Key. This will tell API Layer to use the API Key that we have used.

**MAKE SURE TO REPLACE `YOUR_API_KEY` WITH YOUR ACTUAL API KEY **

Now why do we need an api key? Because it makes sure your requests are tied to your account and charge you accordingly, nothing is free in life expect an HB CodeLink general membership

## Day 7

Now lets create a response object which represents the data we get back

```python
response = requests.request("GET", url, headers=headers, data = payload)
result = response.text
```

This will create an object looking like this

```json
{
  "date": "2018-02-22",
  "historical": "",
  "info": {
    "rate": 148.972231,
    "timestamp": 1519328414
  },
  "query": {
    "amount": 25,
    "from": "GBP",
    "to": "JPY"
  },
  "result": 3724.305775,
  "success": true
}
```

This looks like a dictionary (its actually different called JSON) and displays all the data that is returned. In this example the user converted 25 Pounds to Yen. This returned 3724.31 and the current rate.

These values are based on the URL Like this

url = "https://api.apilayer.com/exchangerates_data/convert?to={JPY}&from={GDP}&amount={99}"

This will Convert 99 GDP into Yen

Now we need to make it by user input

Lets add 3 user input lines like this and modify the url based on them

```python
to_amount = input("Enter To Currency ")
from_amount = input("Enter From Currency")
amount = input("Enter Amount")

url = f"https://api.apilayer.com/exchangerates_data/convert?to={to_amount}&from={from_amount}&amount={amount}"
```

Now lets print the returned value in the terminal

```python
print(result)
```

Now we have a working currency converter in Python!
