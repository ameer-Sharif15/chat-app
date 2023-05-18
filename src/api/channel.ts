const storedItem: string | null = localStorage.getItem('channels')

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
        name: string,
        desc: string,
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



export const createGroup = (newVal: {name: string, desc: string, id: number}) => {
    const repo = new UsersRepository({})
    repo.create(newVal)
    const items = repo.getAll()
    localStorage.setItem("channels", JSON.stringify(items));
}


// localStorage.removeItem('channels')