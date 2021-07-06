---
sidebar_label: FAQ
---

# Mobile App FAQ

This page attempts to answer as comprehensively as possible the most commonly asked questions we've encountered from users who've reported problems to us.

If you still can't find a solution to your problem, please join our Discord server using [this link](https://decrypt.co/discord-invite). 
There, you'll find updated information in real time and get answers from the community. Depending on the time of day, the channel is also staffed with moderators who can help you.

## Creating a Wallet

### Problem: I can’t create an account

#### I can't enter an email account

* If you are trying to enter an email account and the creation button is inactive, please double-check  that you input your address correctly.
* If you've already created an account, you're in the wrong place. Go back to the Log In option on the Menu and access your wallet that way.
 * You're trying to log into a wallet suspected of fraud. (Go to the Discord channel to dispute this.)
 * You have multiple accounts on one device, which is against our policy. Remove all but one account and try again.

#### I can't confirm my email

We use [Magic links](https://magic.link) to verify your emails, so instead of a password, we send a link to your inbox.
To ensure this process works smoothly, please follow these steps:

* Enter your email account in the Decrypt app.
* Open the corresponding email account in your mobile Inbox (If the Magic Link is not in your Inbox, please check your spam folder).
* In the Magic Link email, click: "Log into Decrypt." You should be directed to a web browser screen to confirm the process. This is not the final login step!
* Go back to the Decrypt app and wait for a PIN request to appear.  This is the last step in verifying your account's and is an indicator that the log in was a success.

💡**Note:** Logging into to the app is supported on mobile phones only. The link will expire after 10 minutes.

![email confirmation modal](https://wp.decrypt.co/wp-content/uploads/2021/04/Screenshot_20210413-131001_Decrypt-e1618353911166.jpeg)

#### I’m getting an error

Occasionally you may see errors stating API or OST connection issues. These mean we’re having some technical difficulties. We are notified about them and are working to resolve them.We'll be posting real-time updates on these issues in our [Discord server](https://decrypt.co/discord-invite), if you want to catch up on the fixes.

💡**Troubleshooting tip:** We release app updates frequently, sometimes several times a week. If all else fails, try deleting the app and reinstalling it to see if that allows you to sign in.

## Logging into the Decrypt wallet

### Problem: I can’t log in

#### I get a message that my email address is not recognized

Please ensure you are using the same email you signed up with. Our policy permits only one email account per device.

💡**Note:** If you have signed in to more than one account on a device, it might be blocked.

#### I get a message stating that OST is unavailable

Our tokens are hosted on the OST sidechain. Sometimes the blockchain may be temporarily down or unreachable. Try again later; this is normally resolved within a short amount of time.

#### I’m asked to enter biometric identification in the app

Some Android devices are set up with default biometric identification. We do not require biometrics to use our app. To remove the biometric request, please change your device settings, otherwise tap “cancel”/ “back” to remove the thumbnail request.

####I forgot my PIN number. How can I authorize my new device?

There are two ways to authorize an account (wether its a new device or the same one) - using your PIN or your Seed Phrase. These are the only ways we can ensure your identity and if you lose access to both, you'll need to create a new account.

####I’ve tried signing in to my account using a new device but am required to verify it

If you want to transfer your wallet from one device to another, you can authenticate it like this:

1. Open the app in the new device
2. Sign in from the new device
3. Use the pin code in the new device
4. Find the mnemonic text that appears in the authorization area in the old device
5. Enter the mnemonic text into the authorization area in the new device

For detailed instructions on how to recover your account, [go here](/docs/mobile-app/device-recovery).

## Connecting to a wallet

### Problem: my wallet isn't connecting

#### My wallet isn’t connecting

![wallet not connecting](https://wp.decrypt.co/wp-content/uploads/2021/04/Screenshot_20210315-094513_Decrypt-e1618354136374.jpeg)

The wallet may take a some seconds to connect to the OST blockchain, depending on your connection speed and device processing speed.
Please follow the connection color and status and wait until the light turns **green** to activate the wallet.

## Token collection

### Problem: I’m not getting tokens

#### I get a message in the app saying I can get tokens every 40 seconds

Our token collection mechanism in designed to have a cap speed of one token per every 40 seconds when reading an article (which we assume is a minimal read time.) This is in line with the app's goal of rewarding actual readership.

#### I get a message saying I have reached my daily cap

To give more users an opportunity to enjoy the tokens, there is a daily cap on token use. You can see what the cap is in the app's menu under "Daily cap," below the summary of tokens you've amassed.

#### I get a message in the app saying the tokens ran out

We issue a large amount of tokens during each sponsored season (and maybe sometimes between seasons!) Based on supply and demand, the tokens will run out sometimes. If that happens, check back for the next cycle of tokens to be released.

#### I keep reading/reacting/ sharing but the number doesn't seem to change

You can get up to 3 tokens per article (for participation—that is, reading, reacting or sharing). If you share again or re-read, the number will not go up.

#### My tokens are not updated in real time

Tokens can take a bit of time to update. For each transaction, we connect to the blockchain—and that can be time consuming when the connection is slow or the processing power is weak. Please be patient.

## Reward Redemption

### Problem: Redemption option is unavailable

#### The redeem button is grayed out

A redeemed item can be grayed out if the item is not available yet, not available anymore (ran out), temporarily unavailable or you have too few tokens in your wallet to redeem the item.

### Problem: I can’t complete my redemption

#### I’ve clicked ‘redeem’ and am now getting a message that the redemption failed

![redemption error image](https://wp.decrypt.co/wp-content/uploads/2021/04/Screenshot_20210325-153019_Decrypt-e1618353556937.jpeg)

In some cases, clicking the "I want to redeem for DCPT" button and moving past the loader to a red fail notification, can happen. Likely causes for this include:

 * Network connection timing out when the redemption is processing
 * Internal issues, such as server-request load, we encounter with connecting to the API or the OST blockchain

💡**Troubleshooting tips:** Try exiting and reloading the app, then try to redeem again. Or find a place with stable Internet connection and try again.

#### The redemption is stuck/loader

A stuck loader is likely caused by a slow connection (and should say so with a message.) Close the app and try again. Your redemption status will be kept for 5 minutes.

#### I've canceled my redemption and want to try again

If for any reason you closed the app, or tapped "Back," or Cancel, we will save your request status in queue for up to 5 minutes, so you can return to the redemption and complete it. (After 5 minutes, the item will be again available for anyone to claim.)

#### I'm getting a message that the request is complete but might take time to update

 * Check your status in a couple of hours in the activity screen to see if it is completed. The activity screen should include a confirmation number for the redemption.
 * You should get an additional email confirmation that the redemption was approved and the item can be claimed.
 * If time has passed and the item is not updated, use the email provided in the error message, or our Discord account,  and send us your confirmation number and account email so we can check why it failed.

#### After redemption succeeded, The status in the activity screen is "Processing" 

This means that we are trying to get a transaction through and sign you up for redemption. Come back later to see the status update.


## Reward Claiming

### Problem: I did not receive a claim email for my tokens

Contact us on [Discord](https://decrypt.co/discord-invite).

Be sure to have your confirmation number and Decrypt wallets' email. We cannot help you out without these two.

