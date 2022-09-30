import Header from "./Header";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateBeer() {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTip, setBrewersTip] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState('')
    const [countributedBy, setCountributedBy] = useState('')

    const updateName = e => setName(e.target.value)
    const updateTagline = e => setTagline(e.target.value)
    const updateDescription = e => setDescription(e.target.value)
    const updateFirstBrewed = e => setFirstBrewed(e.target.value)
    const updateBrewersTip = e => setBrewersTip(e.target.value)
    const updateAttenuationLevel = e => setAttenuationLevel(e.target.value)
    const updateCountributedBy = e => setCountributedBy(e.target.value)

    const submitForm = e => {
        e.preventDefault();

        const bodyObject = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTip,
            attenuation_level: Number(attenuationLevel),
            contributed_by: countributedBy,
        }
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', bodyObject)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Header />
            <div>
                <form onSubmit={submitForm}>
                    <div>
                        <label>Name</label>
                    </div>
                    <div>
                        <input type="text" value={name} onChange={updateName} />
                    </div>
                    <div>
                        <label>Tagline</label>
                    </div>
                    <div>
                        <input type="text" value={tagline} onChange={updateTagline} />
                    </div>
                    <div>
                        <label>Description</label>
                    </div>
                    <div>
                        <textarea rows={5} cols={40} type="text" value={description} onChange={updateDescription}></textarea>
                    </div>
                    <div>
                        <label>First Brewed</label>
                    </div>
                    <div>
                        <input type="text" value={firstBrewed} onChange={updateFirstBrewed} />
                    </div>
                    <div>
                        <label>Brewers Tips</label>
                    </div>
                    <div>
                        <input type="text" value={brewersTip} onChange={updateBrewersTip} />
                    </div>
                    <div>
                        <label>Attenuation Level</label>
                    </div>
                    <div>
                        <input type="text" value={attenuationLevel} onChange={updateAttenuationLevel} />
                    </div>
                    <div>
                        <label>Countributed By</label>
                    </div>
                    <div>
                        <input type="text" value={countributedBy} onChange={updateCountributedBy} />
                    </div>
                    <button>Create new beer</button>
                </form>
            </div>
        </div>
    );
}

export default CreateBeer;