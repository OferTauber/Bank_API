const express = require('express');
const route = express.Router();
const utils = require('./utils');

//todo Add user
{
  // Can add user (personn) to the bank and imidiatly open a new accaount
  // User has the following:
  // passport id (Uniqe, to be provided), name, cash(default 0), credit(default 0)
  //? cases:
  //?   user already exists
  //?   invalid name
  //?   invalid credit (less then 0)
}

// Open account
{
  // Create new accunt to an exiting user
  // need: user id, , cash(default 0), credit(default 0)
  //? cases:
  //?   user not exist
  //?   invalid credit (less then 0)
}
route.put('/new_account', (req, res) => {
  const { cash, credit } = req.query;
  try {
    const returnVal = utils.openNewaccaount(req.body, cash * 1, credit * 1);
    if (utils.dataIsValid(returnVal)) {
      res.status(200).send(returnVal);
    } else {
      res.status(400).send(returnVal);
    }
  } catch (e) {
    console.warn(e);
    res.status(400).send(e);
  }
});

// Depositing
{
  // Can deposit cash to an account.
  // need: account id, amount of cash
  //? cases:
  //?   account not exist
  //?   invalid amount of cash (less then 0)
}
route.put('/deposit/', (req, res) => {
  try {
    const accountId = req.body;
    const { amount } = req.query;
    const accaount = utils.deposit(accountId, amount * 1);
    if (utils.dataIsValid(accaount)) {
      res.status(200).send(accaount);
    } else {
      res.status(400).send(accaount);
    }
  } catch (e) {
    console.warn(e);
    res.status(400).send(e);
  }
});

//todo Update credit
{
  // Can update an accunt credit (only positive numbers)
  // need: account id, credit
  //? cases:
  //?   account not exist
  //?   invalid credit (less then 0)
  //?   invalid credit (less then the current balance)
}

// Withdraw money
{
  // Can withdraw money from an accunt
  // need: account id, amount to withdraw
  //? cases:
  //?   account not exist
  //?   out of credit
  //?   invalid withdraw amount (less then 0)
}
route.put('/withdraw/', (req, res) => {
  try {
    const accountId = req.body;
    const { amount } = req.query;
    const accaount = utils.withdraw(accountId, amount * 1);
    if (utils.dataIsValid(accaount)) {
      res.status(200).send(accaount);
    } else {
      res.status(400).send(accaount);
    }
  } catch (e) {
    console.warn(e);
    res.status(400).send(e);
  }
});

//todo Transferring
{
  // Can transfer money from one account to another with credit(can
  // transfer money until the cash and credit run out)
  // need: payer account id, payee account id, amount to transfer
  //? cases:
  //?   payer account not exist
  //?   payee account not exist
  //?   payer is out of credit
  //?   invalid transfer amount (less then 0)
}

// Show details of account
{
  // Can fetch all details of a particular account
  // need: account id
  //? cases:
  //?   account not exist
}
route.get('/accaount', (req, res) => {
  try {
    const accaount = utils.getaccaount(req.body);
    if (utils.dataIsValid(accaount)) {
      res.status(200).send(accaount);
    } else {
      res.status(400).send(accaount);
    }
  } catch (e) {
    console.warn(e);
    res.status(400).send(e);
  }
});

// Show details of user
{
  // Can fetch all details of a particular user
  // need: user id
  //? cases:
  //?   user not exist
}
route.get('/user', (req, res) => {
  try {
    const user = utils.getUser(req.body);
    if (utils.dataIsValid(user)) {
      res.status(200).send(user);
    } else {
      res.status(400).send(user);
    }
  } catch (e) {
    console.warn(e);
    res.status(400).send(e);
  }
});

// Show details of all users
// Can fetch all details of all the users
route.get('/all_users', (req, res) => {
  void req;
  try {
    const users = utils.getAllUsers();
    res.status(200).send(users);
  } catch (e) {
    console.warn(e);
    res.status(400).send(e);
  }
});

// ! temp!!!!
route.get('/', (req, res) => {
  void req;
  res.send('hi!');
});

module.exports = route;
