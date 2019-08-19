import React, { useState } from 'react';
import ListTeams from './components/ListTeams';
import AddTeams from './components/AddTeams';
import EditTeams from './components/EditTeams';

const App = () => {
  const teamsData = [
    { id: 1, name: 'Arsenal', stadium: 'Emirates' },
    { id: 2, name: 'Aston Villa', stadium: 'Villa Park' },
    { id: 3, name: 'Bournemouth', stadium: 'Vitality Stadium' }
  ]

  const [teams, setTeams] = useState(teamsData)
  const [editing, setEditing] = useState(false)

  const addTeam = team => {
    team.id = teams.length + 1
    setTeams([...teams, team]);
  }

  const initialFormState = { id: null, name: '', stadium: '' }
  const [currentTeam, setCurrentTeam] = useState(initialFormState)

  const editRow = team => {
    setEditing(true)
    setCurrentTeam({ id: team.id, name: team.name, stadium : team.stadium })
  }

  const updateTeam = (id, updatedTeam) => {
    setEditing(false)
    setTeams(teams.map(team => (team.id === id ? updatedTeam : team)))
  }

  const deleteTeam = id => {
    setTeams(teams.filter(team => team.id !== id))
  }

  return (
    <div className="main-container container">
      <h1 className="main-title pt-5 pb-3">Premiership Add, Edit and Delete</h1>
      <div className="grid-teams">
        <div className="add-teams">
          {editing ? (
            <div className="mt-3">
              <h2 className="sub-title">Edit Team</h2>
              <EditTeams
                editing={editing}
                setEditing={setEditing}
                currentTeam={currentTeam}
                updateTeam={updateTeam}
              />
            </div>
          ) : (
            <div className="mt-3">
              <h2 className="sub-title">Add Team</h2>
              <AddTeams addTeam={addTeam} />
            </div>
          )}
        </div>
        <div className="list-teams mt-5">
          <h2 className="sub-title">List Teams</h2>
          <ListTeams teams={teams} editRow={editRow} deleteTeam={deleteTeam} />
        </div>
      </div>
    </div>
  )
}

export default App
