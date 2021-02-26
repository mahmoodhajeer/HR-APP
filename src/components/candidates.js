import React from 'react'

const Candidates = ({candidates}) => {
    
    return (
        <div>
            <center><h1>candidates list</h1></center>
            {candidates.map((candidate) => (
                <div class="card">
                    <div class="card-body">
                        <h4 clas="card-title">{candidate.full_name}</h4>
                        <h6 class="card-subtitle mb-2 text-mted">date of birth: {candidate.date_of_birth}</h6>
                        <h6 class="card-subtitle mb-2 text-mted">years of experience: {candidate.years_of_experience}</h6>
                        <h6 class="card-subtitle mb-2 text-mted">department ID: {(() => {
                            // eslint-disable-next-line default-case
                            switch (candidate.department_ID) {
                                case 0: return  "IT";
                                case 1: return  "HR";
                                case 2: return "Finance";
                            }
                        })()}</h6>
                        <h6 class="card-subtitle mb-2 text-mted">resume: click to download </h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Candidates;