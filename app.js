//import {Holidays} from "Holidays.json"

//export default function getQuote(day) {
//    return (
//        <>help me please</>
//    )
//}
let quotes = 
{ 
    1: "'The only way to do great work is to love what you do.' - Steve Jobs",
    2: "'Believe you can and you're halfway there.' - Theodore Roosevelt",
    3: "'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchil",
    4: "'The future belongs to those who believe in the beauty of their dreams.' - Eleanor Roosevelt",
    5: "'In the midst of winter, I found there was, within me, an invincible summer.' - Albert Camus",
    6: "'The only limit to our realization of tomorrow will be our doubts of today.' - Franklin D. Roosevelt",
    7: "'Your time is limited, don't waste it living someone else's life.' - Steve Jobs",
    8: "'The only person you should try to be better than is the person you were yesterday.' - Anonymous",
    9: "'The greatest glory in living lies not in never falling, but in rising every time we fall.' - Nelson Mandela",
    10: "'The best way to predict the future is to create it.' - Peter Drucker",
    11: "'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.' - Christian D. Larson",
    12: "'The only way to achieve the impossible is to believe it is possible.' - Charles Kingsleigh (Alice in Wonderland)",
    13: "'Challenges are what make life interesting and overcoming them is what makes life meaningful.' - Joshua J. Marine",
    14: "'You are never too old to set another goal or to dream a new dream.' - C.S. Lewis",
    15: "'Happiness is not by chance, but by choice.' - Jim Rohn",
    16: "'You miss 100% of the shots you don't take.' - Wayne Gretzky",
    17: "'Life is 10% what happens to us and 90% how we react to it.' - Charles R. Swindoll",
    18: "'Don't watch the clock; do what it does. Keep going.' - Sam Levenson",
    19: "'The only place where success comes before work is in the dictionary.' - Vidal Sassoon",
    20: "'The future depends on what you do today.' - Mahatma Gandhi",
    21: "'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.' - Helen Keller",
    22: "'Nothing is impossible, the word itself says 'I'm possible'!' - Audrey Hepburn",
    23: "'Success is stumbling from failure to failure with no loss of enthusiasm.' - Winston Churchill",
    24: "'The greatest glory in living lies not in never falling, but in rising every time we fall.' - Ralph Waldo Emerson",
    25: "'It does not matter how slowly you go as long as you do not stop.' - Confucius",
    26: "'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.' - Helen Keller",
    27: "'The journey of a thousand miles begins with one step.' - Lao Tzu",
    28: "'The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.' - Joel Brown",
    29: "'Dream big and dare to fail.' - Norman Vaughan",
    30: "'You are never too old to set another goal or to dream a new dream.' - Les Brown",
    31: "'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.' - Albert Schweitzer"
    }

function getQuote(day) {
    document.getElementById("quote").innerHTML = quotes[day];
    return Quotes[day]
}

