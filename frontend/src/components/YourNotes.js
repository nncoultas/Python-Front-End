import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNotes } from '../actions';
import { Link } from 'react-router-dom';

class YourNotes extends Component {
  componentDidMount() {
    this.props.getNotes(this.props.users);
  }

  render() {
    return (
      <Container>
        <h2 className="yourNotes">Your Notes:</h2>
        <div className="cardsList">
          {this.props.notes.map(note => {
            return (
              <form>
                <form key={note._id} note={note} />
                {note.selected ? (
                  <Redirect to={`/note/${note._id}`} />
                ) : (
                  console.log('redirect ')
                )}
              </form>
            );
          })}
          <Link to="/" className="notesLink">
            Close Notes
          </Link>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(YourNotes);
