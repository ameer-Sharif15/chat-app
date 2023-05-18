const storedItems: string | null = localStorage.getItem('list')

const item: [any] = storedItems ? JSON.parse(storedItems): [];


const storedItem: string | null = localStorage.getItem('users')

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
     getAlls() {
        return  item;
    }

     create(attrs: {
        name: string,
        password: string,
        id: number,
        email: string
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

     update(id: number, attrs: {
        name: string,
        id: number
    }) {
        const records = this.getAll();
        const record = records.find((record: any) => record.id === id)
        if (!record) {
            throw new Error(`Record with the id ${id} not found`)
        }
        const reco = this.getAlls();
        reco.push(attrs)
    }

     getOneBy(filters: any) {
        const records =  this.getAll();
        for (let record of records) {
            let found = true;
            for (let key in filters) {
                if (record[key] !== filters[key]) {
                    found = false;
                }
            }
            if (found) {
                return record;
            }
        }
    }
     getIsTrue(filters:any) {
        const records =  this.getAll();
        let found
        for (let record of records) {
            found = true;
            for (let key in filters) {
                if (record[key] !== filters[key]) {
                    found = false;
                }
            }
            if (found) {
                return record;
            }
        }
        return found
    }
}



export const repo = new UsersRepository({})






export const createUsersId = (id: number, attrs: {
    name: string,
    id: number
}) => {
        const repo = new UsersRepository({})
        repo.update(id, attrs)
        const items = repo.getAlls()
        localStorage.setItem("list", JSON.stringify(items))
}

// localStorage.removeItem('chats')