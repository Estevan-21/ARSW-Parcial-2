/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.services;

import edu.eci.arsw.providers.OpenWeather;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;


/**
 *
 * @author 2109950
 */
public class WeatherServices {
    
    OpenWeather op=new OpenWeather();
    
    public Set getWeather(String city) throws IOException{      
        return op.search(city);
    }
    
    
}
