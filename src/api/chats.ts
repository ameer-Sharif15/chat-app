const storedItem: string | null = localStorage.getItem('chats')

const itemsGrp: [any] = storedItem ? JSON.parse(storedItem): [];

class UsersRepository{

    filename: {}
    constructor(filename: {}) {
        if (!filename) {
            throw new Error('creating a repositroy requires a filename');
        }
        this.filename = filename;
    }
     getAll() {
        return  itemsGrp;
    }

     create(attrs: {
        text: string,
        day: number,
        hours: number,
        min: number,
        name: string,
        id: number
    }) {
        const records =  this.getAll();
        records.push(attrs);

    }

    randomId() {
        return Math.random() * 99999999
    }

     getOne(name: string) {
        const records =  itemsGrp;
        return records.find((record: any) => record.name === name)
    }

     delete(id: number) {
        const records =  itemsGrp;
        const fliterdRecords = records.filter((record: any) => record.id !== id)
        records.push(fliterdRecords);
    }
}



export const createChats = (newVal: {text: string,
    day: number,
    hours: number,
    min: number,
    name: string,
    id: number}) => {
    const repo = new UsersRepository({})
    repo.create(newVal)
    const items = repo.getAll()
    localStorage.setItem("chats", JSON.stringify(items));
}


// localStorage.removeItem('chats')