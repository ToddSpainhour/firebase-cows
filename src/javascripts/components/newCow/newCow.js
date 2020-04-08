import utils from '../../helpers/utils';

const showForm = () => {
  let domString = '';
  domString += '<h2>New Cow</h2>';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="text">Name</label>';
  domString += '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">';
  domString += '</div>';

  domString += '<div class="form-group">';
  domString += '<label for="text">Age</label>';
  domString += '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">';
  domString += '</div>';

  domString += '<div class="form-group">';
  domString += '<label for="text">Weight</label>';
  domString += '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">';
  domString += '</div>';

  domString += '<div class="form-group">';
  domString += '<label for="text">Location</label>';
  domString += '<input type="text" class="form-control" id="">';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-primary">Add A Cow!</button>';
  domString += '</form>';

  utils.printToDom('new-cow', domString);
};

export default { showForm };
