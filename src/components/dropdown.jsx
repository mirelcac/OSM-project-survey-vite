import { useState } from "react"

const Dropdown = () => {
    const [creature, SetCreatre] = useState("");
    < h1 > What is your biggest fear?</h1>
    return (
        <form>
            <select
                onChange={event => setCreature(event.target.value)}
                value={creature}
            >
                <option value="">Select Creature</option>
                <option value="Ghost">Ghost</option>
                <option value="Whitch">Whitch</option>
                <option value="Zombie">Zombie</option>
            </select>
        </form>
    )
}

export default Dropdown