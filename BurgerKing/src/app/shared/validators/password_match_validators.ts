import { AbstractControl } from '@angular/forms'

export const PasswordMatchValidator = (PasswordControlName: string, ConfirmPasswordName: string) =>{
    const validator = (form: AbstractControl) =>{
        const passwordControl = form.get(PasswordControlName);
        const confirmPasswordControl = form.get(ConfirmPasswordName);

        if(!passwordControl || !confirmPasswordControl) return;

        if(passwordControl.value !== confirmPasswordControl.value){
            confirmPasswordControl.setErrors({notMatch: true});
        }else{
            const errors = confirmPasswordControl.errors;
            if(!errors) return;

            delete errors.notMatch;
            confirmPasswordControl.setErrors(errors);
        }
    }
    return validator;
}