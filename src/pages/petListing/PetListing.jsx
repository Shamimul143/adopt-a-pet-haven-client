
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import PetCardDeteils from "./PetCardDeteils";
import { useEffect, useState } from "react";
import usePet from "../../hooks/usePet";
import axios from "axios";






const PetListing = () => {
    const [search, setSearch] = useState('');
    const [asc, setAsc] = useState()
    const [pet] = usePet();
    const [displayPets, setDisplayPets] = useState([])
    console.log(displayPets);

    const url = (`http://localhost:5000/pets?sort=${asc ? 'asc' : 'dsc'}&search=${search}`)
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setDisplayPets(res.data)
            })

    }, [url])

    const handleSearch = (e) => {
        e.preventDefault();
        const textsearch = e.target.search.value;
        setSearch(textsearch)
    }



    const handleCategory = filter => {
        if (filter === "all") {
            setDisplayPets(pet)
        } else if (filter === "dog") {
            const dog = pet.filter(item => item.petCategory === 'Dog');
            setDisplayPets(dog)
        }
        else if (filter === "cat") {
            const cat = pet.filter(item => item.petCategory === 'Cat');
            setDisplayPets(cat)
        }
        else if (filter === "rabbit") {
            const rabbit = pet.filter(item => item.petCategory === 'Rabbit');
            setDisplayPets(rabbit)
        }

    }

    return (
        <div>
            <div className="lg:flex lg:justify-evenly justify-center items-center px-5 " >
                <div>
                    <Menu>
                        <MenuHandler>
                            <Button className="bg-green-400 px-4 py-2 rounded-lg text-white">Category: {displayPets.length}</Button>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem onClick={() => handleCategory('all')} >all</MenuItem>
                            <MenuItem onClick={() => handleCategory('dog')} >dog</MenuItem>
                            <MenuItem onClick={() => handleCategory('cat')}>cat</MenuItem>
                            <MenuItem onClick={() => handleCategory('rabbit')}>rabbit</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <form onSubmit={handleSearch} >
                    <input type="text" name="search" placeholder="seach" className="rounded-lg" />
                    <input type="submit" value="search" className="bg-green-400 px-4 py-2 rounded-lg text-white" />
                </form>
                <div>
                    <button onClick={() => setAsc(!asc)} className="bg-green-400 px-4 py-2 rounded-lg text-white">{asc ? "Sort:Recent date" : "Sort:Long date"}</button>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    displayPets.map(item => <PetCardDeteils key={item._id} item={item}></PetCardDeteils>)
                }
            </div>
        </div>
    );
};

export default PetListing;