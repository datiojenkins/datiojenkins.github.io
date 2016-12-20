var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1040389",
        "ok": "859480",
        "ko": "180909"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "46",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "60065",
        "ok": "32311",
        "ko": "60065"
    },
    "meanResponseTime": {
        "total": "519",
        "ok": "487",
        "ko": "671"
    },
    "standardDeviation": {
        "total": "1259",
        "ok": "973",
        "ko": "2144"
    },
    "percentiles1": {
        "total": "260",
        "ok": "246",
        "ko": "304"
    },
    "percentiles2": {
        "total": "315",
        "ok": "297",
        "ko": "381"
    },
    "percentiles3": {
        "total": "1359",
        "ok": "1319",
        "ko": "1496"
    },
    "percentiles4": {
        "total": "3417",
        "ok": "3386",
        "ko": "3701"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 83372,
        "percentage": 8
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 656236,
        "percentage": 63
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 119872,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 180909,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "559.31",
        "ok": "462.053",
        "ko": "97.256"
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
        "total": "1040389",
        "ok": "859480",
        "ko": "180909"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "46",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "60065",
        "ok": "32311",
        "ko": "60065"
    },
    "meanResponseTime": {
        "total": "519",
        "ok": "487",
        "ko": "671"
    },
    "standardDeviation": {
        "total": "1259",
        "ok": "973",
        "ko": "2144"
    },
    "percentiles1": {
        "total": "260",
        "ok": "246",
        "ko": "304"
    },
    "percentiles2": {
        "total": "315",
        "ok": "297",
        "ko": "381"
    },
    "percentiles3": {
        "total": "1359",
        "ok": "1319",
        "ko": "1496"
    },
    "percentiles4": {
        "total": "3416",
        "ok": "3386",
        "ko": "3701"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 83372,
        "percentage": 8
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 656236,
        "percentage": 63
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 119872,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 180909,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "559.31",
        "ok": "462.053",
        "ko": "97.256"
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
