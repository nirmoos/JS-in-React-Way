class Table {
    constructor(head, body) {
        this.header = new TableHeader(head);
        this.body = new Tablebody(body);
    }
    render() {
        return $("<table />", { class: "table" }).append(
            this.header.render(),
            this.body.render()
        )
    }
}

class TableHeader {
    constructor (head) {
        this.head = head;
    }
    onclick(id) {
        
    }
    render() {
        return $("<tr />").html(
            $.map(this.head, (value, index) => $("<th />", { click: this.onclick }).text(value.name))
        )
    }
}

class Tablebody {
    constructor (body) {
        this.body = body;
        this.onclick = this.onclick.bind(this)
    }
    onclick(e) {
        debugger
        let id = $(e.currentTarget).data('id');
        alert(id);
    }
    render() {
        return $("<tr />").html(
            $.map(this.body, (value, index) => $("<td />", { click: this.onclick }).data('id', index).append($("<span />").text(value.name)))
        )
    }
}

const HEAD = [
    {
        "id": 1,
        "name": "ID"
    },
    {
        "id": 2,
        "name": "NAME"
    },
    {
        "id": 3,
        "name": "MARK"
    }
]

const BODY = [
  	{
		"id": 4,
		"name": "nirmal",
		"mark": 100
	},
	{
		"id": 5,
		"name": "krishnaprasad",
		"mark": 99
	},
    {
		"id": 6,
		"name": "vishnu",
		"mark": 98
	}
]

$(() => {
    const table = new Table(HEAD, BODY);
    $("#table-wrapper").html(table.render());
});
