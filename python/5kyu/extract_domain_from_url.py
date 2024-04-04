# https://www.codewars.com/kata/514a024011ea4fb54200004b

from re import search

def domain_name(url):
    return search('(https?:\/\/)?([a-zA-Z0-9-]+\.)*?(?P<domain>[a-zA-Z0-9-]+)(\.[a-zA-Z]{2,4})+($|\/)', url).group('domain')