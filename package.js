$(document).ready(function () {
    $('.details-btn').click(function () {
        var packageName = $(this).data('package');
        var packageDescription;

        switch (packageName) {
            case 'Paris Delight':
                packageDescription = "Discover the magic of Paris with guided city tours, a visit to the Eiffel Tower, and exquisite French cuisine.";
                break;
            case 'Maldives Getaway':
                packageDescription = "Enjoy crystal-clear waters, luxury resorts, and unforgettable sunsets in the Maldives.";
                break;
            case 'New York Adventure':
                packageDescription = "Explore the excitement of New York City with visits to iconic landmarks like Times Square and the Statue of Liberty.";
                break;
            default:
                packageDescription = "Details for this package are currently unavailable.";
        }

        $('#detailsModalLabel').text(packageName);
        $('#packageDescription').text(packageDescription);
    });
});
