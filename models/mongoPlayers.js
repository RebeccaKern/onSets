var players = {
playerCollection: [],

//CRUD Functionality

// Create: add an item
// e.g. add {name:"Daffy", color:"black", creator:"Warner Bros"}

    add: function(score, name) {
        var newplayer = {
            score: score,
            name: name
        };
        this.playerCollection.push(newplayer);
        return this.playerCollection;
    },

    // retrieveAll: function() {
    //    return this.playerCollection;
    // },

// Retrieve: get an item
// e.g. given the name Daffy, find and return that item

    retrieve: function(name) {
        console.log("in mongoPlayers retrieve");
        for (var i = 0; i < this.playerCollection.length; i++) {
            if (this.playerCollection[i].name === name) {
                return this.playerCollection[i];
            }
        }
    },
// Update: modify an item
// e.g. given {name:"Daffy", color:"green", creator:"Warner Bros"} update the item

    update: function(score, name) {
        for (var i = 0; i < this.playerCollection.length; i++) {
            if (this.playerCollection[i].name === name) {
                this.playerCollection[i].score = score;
                return this.playerCollection;
            }
        }
    },

// Delete: delete an item
// e.g. given the name Daffy, delete that item
    delete: function(name) {
        for (var i = 0; i < this.playerCollection.length; i++) {
            if (this.playerCollection[i].name === name) {
                this.playerCollection.splice(i, 1);
                return this.playerCollection;
            }
        }
    }

}

module.exports = players;