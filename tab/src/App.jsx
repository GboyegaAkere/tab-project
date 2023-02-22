import React from "react";
const url = 'https://course-api.com/react-tabs-project'

function App(){
  const [loading, setLoading] = React.useState(true)
  const [info, setInfo] = React.useState([])
  const [value, setValue] = React.useState(0)

  const fetchJobs = async () =>{
    const response = await fetch(url)
    const newJobs = await response.json()
    setInfo(newJobs)
    setLoading(false)
  }
  React.useEffect(()=>{
    fetchJobs()
  },[])
  

  if(loading){
    return(
      <section className="section loading">
        <h1>please wait.........</h1>
      </section>
    )
  }
  const {company, dates, duties, title} =info[value]
  return(
    <section className="section">
      <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container"></div>
        <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty,index)=>{
              return(
                <div key={index} className='job-desc'>
                  <p>{duty}</p>
                </div>
              )
            })}
        </article>
      </div>
     
    </section>
  )
}

export default App