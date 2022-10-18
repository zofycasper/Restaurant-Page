export default class Staff {
    constructor(type) {
        this.contactList = [];
        this.type = type;
    }
    add(name, position, email, number) {
        const staff = {};
        staff.name = name;
        staff.position = position;
        staff.email = email;
        staff.number = number;
        this.contactList.push(staff);
        return staff;
    }
}
