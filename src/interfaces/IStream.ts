export interface IStream {
    title: String;
    description: String;
    id: Number ;
    userId : Number | String;

}

export interface ICreateStreamForm extends IStream {
    userId : Number | String
}

export interface IEditStreamForm  {
    title: String;
    description: String;
}


export interface IStreamForm extends IStream { 
}

