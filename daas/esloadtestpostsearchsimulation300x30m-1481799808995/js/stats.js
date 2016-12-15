var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "242643",
        "ok": "74191",
        "ko": "168452"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "52",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "60012",
        "ok": "52839",
        "ko": "60012"
    },
    "meanResponseTime": {
        "total": "380",
        "ok": "575",
        "ko": "294"
    },
    "standardDeviation": {
        "total": "2695",
        "ok": "1544",
        "ko": "3064"
    },
    "percentiles1": {
        "total": "85",
        "ok": "371",
        "ko": "70"
    },
    "percentiles2": {
        "total": "296",
        "ok": "394",
        "ko": "89"
    },
    "percentiles3": {
        "total": "503",
        "ok": "1397",
        "ko": "178"
    },
    "percentiles4": {
        "total": "3390",
        "ok": "7134",
        "ko": "3081"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 67375,
        "percentage": 28
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 785,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6031,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 168452,
        "percentage": 69
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "640.3",
        "ok": "195.779",
        "ko": "444.521"
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
        "total": "242643",
        "ok": "74191",
        "ko": "168452"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "52",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "60012",
        "ok": "52839",
        "ko": "60012"
    },
    "meanResponseTime": {
        "total": "380",
        "ok": "575",
        "ko": "294"
    },
    "standardDeviation": {
        "total": "2695",
        "ok": "1544",
        "ko": "3064"
    },
    "percentiles1": {
        "total": "85",
        "ok": "371",
        "ko": "70"
    },
    "percentiles2": {
        "total": "296",
        "ok": "394",
        "ko": "89"
    },
    "percentiles3": {
        "total": "503",
        "ok": "1397",
        "ko": "178"
    },
    "percentiles4": {
        "total": "3390",
        "ok": "7141",
        "ko": "3081"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 67375,
        "percentage": 28
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 785,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6031,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 168452,
        "percentage": 69
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "640.3",
        "ok": "195.779",
        "ko": "444.521"
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
