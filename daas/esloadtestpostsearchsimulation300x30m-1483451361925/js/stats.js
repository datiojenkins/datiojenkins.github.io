var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1034797",
        "ok": "860207",
        "ko": "174590"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "44",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "60046",
        "ok": "56766",
        "ko": "60046"
    },
    "meanResponseTime": {
        "total": "522",
        "ok": "488",
        "ko": "688"
    },
    "standardDeviation": {
        "total": "1318",
        "ok": "1024",
        "ko": "2258"
    },
    "percentiles1": {
        "total": "248",
        "ok": "238",
        "ko": "308"
    },
    "percentiles2": {
        "total": "304",
        "ok": "279",
        "ko": "354"
    },
    "percentiles3": {
        "total": "1361",
        "ok": "1311",
        "ko": "1531"
    },
    "percentiles4": {
        "total": "3453",
        "ok": "3418",
        "ko": "7012"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 88628,
        "percentage": 9
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 650536,
        "percentage": 63
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 121043,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 174590,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "557.76",
        "ok": "463.655",
        "ko": "94.105"
    }
},
contents: {
"req_esloadtestposts-7b444": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation300x30m",
path: "EsLoadTestPostSearchSimulation300x30m",
pathFormatted: "req_esloadtestposts-7b444",
stats: {
    "name": "EsLoadTestPostSearchSimulation300x30m",
    "numberOfRequests": {
        "total": "1034797",
        "ok": "860207",
        "ko": "174590"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "44",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "60046",
        "ok": "56766",
        "ko": "60046"
    },
    "meanResponseTime": {
        "total": "522",
        "ok": "488",
        "ko": "688"
    },
    "standardDeviation": {
        "total": "1318",
        "ok": "1024",
        "ko": "2258"
    },
    "percentiles1": {
        "total": "248",
        "ok": "238",
        "ko": "308"
    },
    "percentiles2": {
        "total": "304",
        "ok": "279",
        "ko": "354"
    },
    "percentiles3": {
        "total": "1361",
        "ok": "1311",
        "ko": "1531"
    },
    "percentiles4": {
        "total": "3453",
        "ok": "3418",
        "ko": "7012"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 88628,
        "percentage": 9
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 650536,
        "percentage": 63
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 121043,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 174590,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "557.76",
        "ok": "463.655",
        "ko": "94.105"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
