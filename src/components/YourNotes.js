import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getNotes } from '../actions';
import { Link } from 'react-router-dom';
import Notes from './Notes';

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
                <Notes key={note.id} note={note} />
              </form>
            );
          })}
        </div>
        <Link to="/" className="notesLink">
          Close Notes
        </Link>
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
