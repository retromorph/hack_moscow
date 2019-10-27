class User {
    private _email: String;
    private _password: String;

    get email(): String {
        return this._email;
    }

    set email(value: String) {
        this._email = value;
    }

    get password(): String {
        return this._password;
    }

    set password(value: String) {
        this._password = value;
    }
}
