import { Schema, model } from "mongoose";

export interface User{
    id:string;
    email:string;
    password:string;
    name:string;
    address:string;
    isAdmin:boolean;
}


export type NewUser = Omit<User, 'id'>;

export const UserSchema = new Schema<User>(
    {
        name: {type: String, required:true},
        email: {type: String, remove:true, unique:true},
        password: {type: String, required:true},
        address: {type: String, required:true},
        isAdmin: {type: Boolean, required:true},
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);

export const UserModel = model<User>('user',UserSchema);