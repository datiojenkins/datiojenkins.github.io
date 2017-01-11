var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19986",
        "ok": "19976",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "39",
        "ko": "20306"
    },
    "maxResponseTime": {
        "total": "20618",
        "ok": "20618",
        "ko": "20613"
    },
    "meanResponseTime": {
        "total": "199",
        "ok": "189",
        "ko": "20449"
    },
    "standardDeviation": {
        "total": "1759",
        "ok": "1700",
        "ko": "123"
    },
    "percentiles1": {
        "total": "45",
        "ok": "45",
        "ko": "20429"
    },
    "percentiles2": {
        "total": "47",
        "ok": "47",
        "ko": "20586"
    },
    "percentiles3": {
        "total": "57",
        "ok": "56",
        "ko": "20613"
    },
    "percentiles4": {
        "total": "91",
        "ok": "91",
        "ko": "20613"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 19836,
        "percentage": 99
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 140,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "148.754",
        "ok": "148.68",
        "ko": "0.074"
    }
},
contents: {
"req_caloadtestposts-4ee46": {
        type: "REQUEST",
        name: "CaLoadTestPostSimulation30x1m",
path: "CaLoadTestPostSimulation30x1m",
pathFormatted: "req_caloadtestposts-4ee46",
stats: {
    "name": "CaLoadTestPostSimulation30x1m",
    "numberOfRequests": {
        "total": "19986",
        "ok": "19976",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "39",
        "ko": "20306"
    },
    "maxResponseTime": {
        "total": "20618",
        "ok": "20618",
        "ko": "20613"
    },
    "meanResponseTime": {
        "total": "199",
        "ok": "189",
        "ko": "20449"
    },
    "standardDeviation": {
        "total": "1759",
        "ok": "1700",
        "ko": "123"
    },
    "percentiles1": {
        "total": "45",
        "ok": "45",
        "ko": "20429"
    },
    "percentiles2": {
        "total": "47",
        "ok": "47",
        "ko": "20586"
    },
    "percentiles3": {
        "total": "57",
        "ok": "56",
        "ko": "20613"
    },
    "percentiles4": {
        "total": "91",
        "ok": "90",
        "ko": "20613"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 19836,
        "percentage": 99
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 140,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "148.754",
        "ok": "148.68",
        "ko": "0.074"
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
