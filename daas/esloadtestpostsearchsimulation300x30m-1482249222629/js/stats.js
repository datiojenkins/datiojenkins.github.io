var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1041891",
        "ok": "855802",
        "ko": "186089"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "51",
        "ko": "44"
    },
    "maxResponseTime": {
        "total": "60091",
        "ok": "31524",
        "ko": "60091"
    },
    "meanResponseTime": {
        "total": "518",
        "ok": "490",
        "ko": "643"
    },
    "standardDeviation": {
        "total": "866",
        "ok": "740",
        "ko": "1292"
    },
    "percentiles1": {
        "total": "331",
        "ok": "319",
        "ko": "387"
    },
    "percentiles2": {
        "total": "390",
        "ok": "370",
        "ko": "438"
    },
    "percentiles3": {
        "total": "1387",
        "ok": "1357",
        "ko": "1469"
    },
    "percentiles4": {
        "total": "3379",
        "ok": "3347",
        "ko": "3458"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 16488,
        "percentage": 2
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 741962,
        "percentage": 71
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 97352,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 186089,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "569.334",
        "ok": "467.647",
        "ko": "101.687"
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
        "total": "1041891",
        "ok": "855802",
        "ko": "186089"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "51",
        "ko": "44"
    },
    "maxResponseTime": {
        "total": "60091",
        "ok": "31524",
        "ko": "60091"
    },
    "meanResponseTime": {
        "total": "518",
        "ok": "490",
        "ko": "643"
    },
    "standardDeviation": {
        "total": "866",
        "ok": "740",
        "ko": "1292"
    },
    "percentiles1": {
        "total": "331",
        "ok": "319",
        "ko": "387"
    },
    "percentiles2": {
        "total": "390",
        "ok": "370",
        "ko": "438"
    },
    "percentiles3": {
        "total": "1387",
        "ok": "1357",
        "ko": "1469"
    },
    "percentiles4": {
        "total": "3379",
        "ok": "3347",
        "ko": "3458"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 16488,
        "percentage": 2
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 741962,
        "percentage": 71
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 97352,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 186089,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "569.334",
        "ok": "467.647",
        "ko": "101.687"
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
