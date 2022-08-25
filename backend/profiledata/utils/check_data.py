def check_presence(request, fields_list):
    """
    Method for checking the presence of all the required fields in the request provided in list

    Return a tuple having True/False as first value and an error or success message in second place

    """

    for field in fields_list:
        item = request.data.get(field)

        if not item:
            return (False, '{} field not present'.format(field))
    return (True, 'All fields present')