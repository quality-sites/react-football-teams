import React, { useState } from 'react';

const EditTeams = props => {
  const [team, setTeam] = useState(props.currentTeam)

  const handleInputChange = event => {
    const { name, value } = event.target
    setTeam({ ...team, [name]: value });
  }

  return (
    <div className="container">
      <form
        onSubmit={event => {
          console.log('team', team);
          event.preventDefault()
          props.updateTeam(team.id, team)
        }}
        className="form"
      >
        <fieldset className="form-group">
          <div className="row col-12">
              <label htmlFor="name">Team</label>
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
            <label htmlFor="stadium">Stadium </label>
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
            <button className="btn btn-primary mr-3">Update Team</button>
            <button
              className="btn btn-danger"
              onClick={() => props.setEditing(false)}
            >
              Cancel
            </button>
        </div>
      </form>
    </div>
  )
}

export default EditTeams;
