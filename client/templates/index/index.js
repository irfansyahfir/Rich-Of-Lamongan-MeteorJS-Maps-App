if (Meteor.isClient) {
    
}

Template.layout.rendered = function() {
    IonSideMenu.snapper.disable();
};