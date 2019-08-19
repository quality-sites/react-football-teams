import React from 'react';

const ListTeams = props => (
  <div className="container list">
    <div className="row pt-3 pb-3 font-weight-bold">
        <div className="col-4">Team</div>
        <div className="col-4">Stadium</div>
        <div className="col-4">Action</div>
    </div>
      {props.teams.length > 0 ? (
        props.teams.map(team => (
          <div className="row pt-3 pb-3" key={team.id}>
            <div className="col-4">{team.name}</div>
            <div className="col-4">{team.stadium}</div>
            <div className="col-4">
              <button
                className="btn btn-primary mr-3"
                onClick={() => {
                  props.editRow(team)
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-primary"
                onClick={() => props.deleteTeam(team.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12">
          No teams
        </div>
      )}
  </div>
)

export default ListTeams;
