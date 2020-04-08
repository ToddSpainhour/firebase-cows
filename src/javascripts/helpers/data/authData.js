import firebase from 'firebase/app';
import 'firebase/auth';

import pasture from '../../components/pasture/pasture';
import farmhouse from '../../components/farmhouse/farmhouse';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const farmhouseDiv = $('#farmhouse');
const singleFarmerDiv = $('#single-farmer');
const newCowDiv = $('#new-cow');
const logOutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // user logged in
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      farmhouseDiv.removeClass('hide');
      singleFarmerDiv.removeClass('hide');
      newCowDiv.removeClass('hide');
      logOutButton.removeClass('hide');
      pasture.buildCows();
      farmhouse.buildFarmers();
    } else {
      // user logged out
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      newCowDiv.addClass('hide');
      farmhouseDiv.addClass('hide');
      singleFarmerDiv.addClass('hide');
      logOutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
