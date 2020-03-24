import firebase from 'firebase/app';
import 'firebase/auth';

import pasture from '../../components/pasture/pasture';
import farmhouse from '../../components/farmhouse/farmhouse';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const farmhouseDiv = $('#farmhouse');
const logOutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      farmhouseDiv.removeClass('hide');
      logOutButton.removeClass('hide');
      pasture.buildCows();
      farmhouse.buildFarmers();
    } else {
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      logOutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
