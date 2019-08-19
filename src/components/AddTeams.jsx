import React, { useState } from 'react';

const AddTeams = props => {
  const initialFormState = { id: null, name: '', stadium: '' }
  const [team, setTeam] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log('team', team); 
    setTeam({ ...team, [name]: value });
  }
  return (
    <div className="container pt-2">
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!team.name || !team.stadium) return;
          props.addTeam(team);
          setTeam(initialFormState);
        }}
        className="form"
      >
        <fieldset className="form-group">
          <div className="row col-12">
            <label htmlFor="team">Team</label>
          </div>
          <div className="row col-12">
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              value={team.name}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset className="form-group">
          <div className="row col-12">
            <label htmlFor="stadium">Stadium</label>
          </div>
          <div className="row col-12">
            <input
              type="text"
              name="stadium"
              id="stadium"
              className="input"
              value={team.stadium}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <div className="row col-12">
            <button className="btn btn-primary">Add Team</button>
        </div>
      </form>
    </div>
  )
}

export default AddTeams;
