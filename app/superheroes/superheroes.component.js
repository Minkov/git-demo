"use strict";
var core_1 = require("@angular/core");
var Superhero = (function () {
    function Superhero(name, url) {
        this.name = name;
        this.url = url;
    }
    return Superhero;
}());
var SuperheroesComponent = (function () {
    function SuperheroesComponent() {
        this.superheroes = [];
    }
    SuperheroesComponent.prototype.ngOnInit = function () {
        this.superheroes = [
            new Superhero("Batman", "https://s-media-cache-ak0.pinimg.com/736x/ae/03/18/ae0318120e8cf4158705144e2b7fe824.jpg"),
            new Superhero("Supergirl", "http://cdn2-www.superherohype.com/assets/uploads/gallery/supergirl-1x04-5/107022_wb_0654b.jpg"),
            new Superhero("Batman", "https://s-media-cache-ak0.pinimg.com/736x/ae/03/18/ae0318120e8cf4158705144e2b7fe824.jpg"),
            new Superhero("Supergirl", "https://s-media-cache-ak0.pinimg.com/736x/83/6b/2e/836b2e1b869efd120be9d9ddac547d8e.jpg"),
            new Superhero("Batman", "https://s-media-cache-ak0.pinimg.com/736x/ae/03/18/ae0318120e8cf4158705144e2b7fe824.jpg"),
            new Superhero("The Flash", "https://www.technobuffalo.com/wp-content/uploads/2016/04/flash-movie-director-writer-grahame-smith.jpg"),
            new Superhero("Batman", "https://s-media-cache-ak0.pinimg.com/736x/ae/03/18/ae0318120e8cf4158705144e2b7fe824.jpg"),
            new Superhero("Supergirl", "https://s-media-cache-ak0.pinimg.com/736x/83/6b/2e/836b2e1b869efd120be9d9ddac547d8e.jpg"),
            new Superhero("Batman", "https://s-media-cache-ak0.pinimg.com/736x/ae/03/18/ae0318120e8cf4158705144e2b7fe824.jpg"),
            new Superhero("The Flash", "https://www.technobuffalo.com/wp-content/uploads/2016/04/flash-movie-director-writer-grahame-smith.jpg"),
        ];
    };
    return SuperheroesComponent;
}());
SuperheroesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "app-superheroes-list",
        templateUrl: "./superheroes.component.html",
        styleUrls: [
            './superheroes.component.css'
        ]
    })
], SuperheroesComponent);
exports.SuperheroesComponent = SuperheroesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXJoZXJvZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VwZXJoZXJvZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFFbEQ7SUFDSSxtQkFDVyxJQUFZLEVBQ1osR0FBVztRQURYLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixRQUFHLEdBQUgsR0FBRyxDQUFRO0lBQ25CLENBQUM7SUFDUixnQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBVUQsSUFBYSxvQkFBb0I7SUFSakM7UUFTSSxnQkFBVyxHQUFnQixFQUFFLENBQUM7SUFnQmxDLENBQUM7SUFkRyx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRyx5RkFBeUYsQ0FBQztZQUNuSCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUcsK0ZBQStGLENBQUM7WUFDNUgsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFHLHlGQUF5RixDQUFDO1lBQ25ILElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRyx5RkFBeUYsQ0FBQztZQUN0SCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUcseUZBQXlGLENBQUM7WUFDbkgsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLHdHQUF3RyxDQUFDO1lBQ3BJLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRyx5RkFBeUYsQ0FBQztZQUNuSCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUcseUZBQXlGLENBQUM7WUFDdEgsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFHLHlGQUF5RixDQUFDO1lBQ25ILElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRSx3R0FBd0csQ0FBQztTQUN2SSxDQUFFO0lBQ1AsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxvQkFBb0I7SUFSaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFO1lBQ1AsNkJBQTZCO1NBQ2hDO0tBQ0osQ0FBQztHQUNXLG9CQUFvQixDQWlCaEM7QUFqQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCAgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5jbGFzcyBTdXBlcmhlcm8ge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLCBcbiAgICAgICAgcHVibGljIHVybDogc3RyaW5nXG4gICAgKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcImFwcC1zdXBlcmhlcm9lcy1saXN0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdXBlcmhlcm9lcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAnLi9zdXBlcmhlcm9lcy5jb21wb25lbnQuY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VwZXJoZXJvZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgc3VwZXJoZXJvZXM6IFN1cGVyaGVyb1tdID0gW107XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdXBlcmhlcm9lcyA9IFtcbiAgICAgICAgICAgIG5ldyBTdXBlcmhlcm8oXCJCYXRtYW5cIiwgIFwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvYWUvMDMvMTgvYWUwMzE4MTIwZThjZjQxNTg3MDUxNDRlMmI3ZmU4MjQuanBnXCIpLFxuICAgICAgICAgICAgbmV3IFN1cGVyaGVybyhcIlN1cGVyZ2lybFwiLCAgXCJodHRwOi8vY2RuMi13d3cuc3VwZXJoZXJvaHlwZS5jb20vYXNzZXRzL3VwbG9hZHMvZ2FsbGVyeS9zdXBlcmdpcmwtMXgwNC01LzEwNzAyMl93Yl8wNjU0Yi5qcGdcIiksXG4gICAgICAgICAgICBuZXcgU3VwZXJoZXJvKFwiQmF0bWFuXCIsICBcImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS83MzZ4L2FlLzAzLzE4L2FlMDMxODEyMGU4Y2Y0MTU4NzA1MTQ0ZTJiN2ZlODI0LmpwZ1wiKSxcbiAgICAgICAgICAgIG5ldyBTdXBlcmhlcm8oXCJTdXBlcmdpcmxcIiwgIFwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvODMvNmIvMmUvODM2YjJlMWI4NjllZmQxMjBiZTlkOWRkYWM1NDdkOGUuanBnXCIpLFxuICAgICAgICAgICAgbmV3IFN1cGVyaGVybyhcIkJhdG1hblwiLCAgXCJodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNzM2eC9hZS8wMy8xOC9hZTAzMTgxMjBlOGNmNDE1ODcwNTE0NGUyYjdmZTgyNC5qcGdcIiksXG4gICAgICAgICAgICBuZXcgU3VwZXJoZXJvKFwiVGhlIEZsYXNoXCIsIFwiaHR0cHM6Ly93d3cudGVjaG5vYnVmZmFsby5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDQvZmxhc2gtbW92aWUtZGlyZWN0b3Itd3JpdGVyLWdyYWhhbWUtc21pdGguanBnXCIpLFxuICAgICAgICAgICAgbmV3IFN1cGVyaGVybyhcIkJhdG1hblwiLCAgXCJodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNzM2eC9hZS8wMy8xOC9hZTAzMTgxMjBlOGNmNDE1ODcwNTE0NGUyYjdmZTgyNC5qcGdcIiksXG4gICAgICAgICAgICBuZXcgU3VwZXJoZXJvKFwiU3VwZXJnaXJsXCIsICBcImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS83MzZ4LzgzLzZiLzJlLzgzNmIyZTFiODY5ZWZkMTIwYmU5ZDlkZGFjNTQ3ZDhlLmpwZ1wiKSxcbiAgICAgICAgICAgIG5ldyBTdXBlcmhlcm8oXCJCYXRtYW5cIiwgIFwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvYWUvMDMvMTgvYWUwMzE4MTIwZThjZjQxNTg3MDUxNDRlMmI3ZmU4MjQuanBnXCIpLFxuICAgICAgICAgICAgbmV3IFN1cGVyaGVybyhcIlRoZSBGbGFzaFwiLCBcImh0dHBzOi8vd3d3LnRlY2hub2J1ZmZhbG8uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA0L2ZsYXNoLW1vdmllLWRpcmVjdG9yLXdyaXRlci1ncmFoYW1lLXNtaXRoLmpwZ1wiKSxcbiAgICAgICAgXSA7XG4gICAgfVxufSJdfQ==