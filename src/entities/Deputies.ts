export class Deputy {

    public id: string;
    public name: string
    public email: string

    constructor(props: Deputy){
        // Object.assign(this, props)
        //ou \/
        
        this.id = props.id
        this.name = props.name
        this.email = props.email
    }
}